import { useContext, useEffect, useState } from "react"
import AppContext from './AppContext'
import axios from 'axios'
import {useAuth, useUser} from "@clerk/react"
import { useLocation,useNavigate } from "react-router-dom"
import {toast} from 'react-hot-toast'

// it creates base url for every endpoint : means every url starts with this base url
axios.defaults.baseURL=import.meta.env.VITE_BASE_URL
const image_base_url=import.meta.env.VITE_TMDB_IMAGE_BASE_URL

export const AppContextProvider=({children})=>{

    const [isAdmin,setIsAdmin]=useState(false)
    const [show,setShow]=useState([])
    const [favoriteMovies,setFavoriteMovies]=useState([])

    const {user}=useUser()
    const {getToken}=useAuth()
    const location=useLocation()
    const navigate=useNavigate()



    const fetchShows=async()=>{
        try{
            const data=await axios.get("/api/shows/all")
            if(data.success){
                setShow(data)
            }
            else{
                toast.error(data.message)
            }
        }
        catch(error){
            console.error(error)
        }
    }
    useEffect(()=>{
        if(user) fetchShows()
    },[user])

    
    const fetchFavoriteMovies=async()=>{
        try{
            const data=await axios.get("/api/user/favorites",{
                headers:{Authorization:`Bearer ${await getToken()}`}})
            if(data.success){
                setFavoriteMovies(data)
            }
            else{
                toast.error(data.message)
            }
        }
        catch(error){
            console.error(error)
        }
    }


    const fetchIsAdmin=async()=>{
        try{
            const data=await axios.get("/api/admin/is-admin",{
                headers:{Authorization:`Bearer ${await getToken()}`}
            })
            setIsAdmin(data.isAdmin);
            if(!data.isAdmin && location.pathname.startsWith("/admin"))
            {
                navigate("/")
                toast.error("you are not authorized to access admin Dashboard")
            }
            
        }
        catch(error){
            console.error(error)
        }
    }
    useEffect(()=>{
        if(user) {
            fetchIsAdmin()
            fetchFavoriteMovies()
        }
    },[user])


    const value={
        axios,
        isAdmin,fetchIsAdmin,
        navigate,getToken,user,
        show,fetchShows,
        favoriteMovies,fetchFavoriteMovies,
        image_base_url
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext=()=>useContext(AppContext)
