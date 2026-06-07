function timeFormat(TotalMinutes) {
    const hour=Math.floor(TotalMinutes/60);
    const min=TotalMinutes%60;
  return `${hour} h ${min}m`
}

export default timeFormat
