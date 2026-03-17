
/* 1m = 3.281f l = 0.264 gallon k = 2.204pond */
function convert()
{   
    const value = Number(document.getElementById("input-val").value)
    const len = document.getElementById("len-val")
    const vol = document.getElementById("vol-val")
    const mass = document.getElementById("mass-val")
    volume(value, vol)
    length(value, len)
    massFunc(value, mass)
}
function length(value, len)
{
    let meter = value / 3.281
    let feet = value * 3.281
    len.innerHTML = `${value} meters = ${feet.toFixed(3)} feets | ${value} feet = ${meter.toFixed(3)} meters`
}
function volume(value, vol)
{
    lit = value / 0.264
    gal = value * 0.264
    vol.innerHTML = `${value} liters = ${gal.toFixed(3)} gallons | ${value} gallons = ${lit.toFixed(3)} liters`
}
function massFunc(value, mass)
{
    kg = value / 2.204
    pond = value * 2.204
    mass.innerHTML = `${value} Kilogram = ${pond.toFixed(3)} pounds | ${value} pond = ${kg.toFixed(3)} Kg`
}