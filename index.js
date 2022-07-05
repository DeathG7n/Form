const fullName = document.getElementById("name")
const password = document.getElementById("pass")
const confirmPass = document.getElementById("confirmPass")
const confirmation = document.getElementById("confirm")
const form = document.getElementById("form")


form.addEventListener("submit" ,(e)=>{
    e.preventDefault()
    if (password.value === confirmPass.value) {
        console.log(fullName.value)
        confirmation.innerHTML = `Correct Details ${fullName.value}`
    } else{
        confirmation.innerHTML = `Wrong Details ${fullName.value}`
        return
    }
})

