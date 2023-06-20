
window.onload = async function() {

   
    const request = await fetch("https://randomuser.me/api/?results=100")
    data = await request.json()
    console.log("isim verisi:", data)
    
    console.log(data.results,typeof(data.results))
    data.results.map(function(user){
        if (user.gender == cinsiyet){
            console.log(user)
    }
}) 

    
    let button = document.getElementById('search')
    button.addEventListener("click",function(){
        let yas_select = document.getElementById("yas")
        let yas = yas_select.options[yas_select.selectedIndex].value

        let cinsiyet_select = document.getElementById("cinsiyet")
        let cinsiyet = cinsiyet_select.options[cinsiyet_select.selectedIndex].value

        let location_select = document.getElementById("location")
        let location = location_select.options[location_select.selectedIndex].value
        console.log(yas,cinsiyet,location)
        let icerik = document.querySelector(".icerik")
        icerik.innerHTML = ""
        let liste = []
        let max = Number(yas) +10

        



        data.results.map(function(user){
            
            if (user.gender == cinsiyet && yas < user.dob.age &&  user.dob.age < max  && user.location.country == location){
                console.log(yas,user.dob.age,max, yas < user.dob.age,  user.dob.age < max)
                return icerik.innerHTML += 

                `<div class="flex-item"> 
                <img src=${user.picture.large} alt=${user.name.first}>
                <h1> ${user.name.fullName}</h1>
            
                <div class='about-section'>
                
                <h3> Hakkında </h3>
                <p> Kullanıcı Adı: ${user.login.username}</p>
                <p> Ülke: ${user.location.country}</p>
                <p> Şehir: ${user.location.city} </p>
                <p> Yas: ${user.dob.age} </p>
                
                </div>
            
                <div class='contact'>
                <h3>İletişim</h3>
            
                <a href = "mailto:${user.email}">Mail Gönder</a>
                </div>
            
                </div>`




        }

        if ("bos" == cinsiyet && yas < user.dob.age&&  user.dob.age < max  && user.location.country == location){
            
            return icerik.innerHTML += 

            `<div class="flex-item"> 
            <img src=${user.picture.large} alt=${user.name.first}>
            <h1> ${user.name.fullName}</h1>
        
            <div class='about-section'>
            
            <h3> Hakkında </h3>
            <p> Kullanıcı Adı: ${user.login.username}</p>
            <p> Ülke: ${user.location.country}</p>
            <p> Şehir: ${user.location.city} </p>
            <p> Yas: ${user.dob.age} </p>
            
            </div>
        
            <div class='contact'>
            <h3>İletişim</h3>
        
            <a href = "mailto:${user.email}">Mail Gönder</a>
            </div>
        
            </div>`




    }


    if (user.gender == cinsiyet && yas == "bos"  && user.location.country == location){
            
        return icerik.innerHTML += 

        `<div class="flex-item"> 
        <img src=${user.picture.large} alt=${user.name.first}>
        <h1> ${user.name.fullName}</h1>
    
        <div class='about-section'>
        
        <h3> Hakkında </h3>
        <p> Kullanıcı Adı: ${user.login.username}</p>
        <p> Ülke: ${user.location.country}</p>
        <p> Şehir: ${user.location.city} </p>
        <p> Yas: ${user.dob.age} </p>
        
        </div>
    
        <div class='contact'>
        <h3>İletişim</h3>
    
        <a href = "mailto:${user.email}">Mail Gönder</a>
        </div>
    
        </div>`




}
    
if (user.gender == cinsiyet && yas < user.dob.age&&  user.dob.age < max  && "bos" == location){
            
    return icerik.innerHTML += 

    `<div class="flex-item"> 
    <img src=${user.picture.large} alt=${user.name.first}>
    <h1> ${user.name.fullName}</h1>

    <div class='about-section'>
    
    <h3> Hakkında </h3>
    <p> Kullanıcı Adı: ${user.login.username}</p>
    <p> Ülke: ${user.location.country}</p>
    <p> Şehir: ${user.location.city} </p>
    <p> Yas: ${user.dob.age} </p>
    
    </div>

    <div class='contact'>
    <h3>İletişim</h3>

    <a href = "mailto:${user.email}">Mail Gönder</a>
    </div>

    </div>`




}

if ("bos" == cinsiyet && "bos" ==yas  && "bos" == location){
            
    return icerik.innerHTML += 

    `<div class="flex-item"> 
    <img src=${user.picture.large} alt=${user.name.first}>
    <h1> ${user.name.fullName}</h1>

    <div class='about-section'>
    
    <h3> Hakkında </h3>
    <p> Kullanıcı Adı: ${user.login.username}</p>
    <p> Ülke: ${user.location.country}</p>
    <p> Şehir: ${user.location.city} </p>
    <p> Yas: ${user.dob.age} </p>
    
    </div>

    <div class='contact'>
    <h3>İletişim</h3>

    <a href = "mailto:${user.email}">Mail Gönder</a>
    </div>

    </div>`




}

if ("bos" == cinsiyet && yas < user.dob.age&&  user.dob.age < max    && "bos" == location){
            
    return icerik.innerHTML += 

    `<div class="flex-item"> 
    <img src=${user.picture.large} alt=${user.name.first}>
    <h1> ${user.name.fullName}</h1>

    <div class='about-section'>
    
    <h3> Hakkında </h3>
    <p> Kullanıcı Adı: ${user.login.username}</p>
    <p> Ülke: ${user.location.country}</p>
    <p> Şehir: ${user.location.city} </p>
    <p> Yas: ${user.dob.age} </p>
    
    </div>

    <div class='contact'>
    <h3>İletişim</h3>

    <a href = "mailto:${user.email}">Mail Gönder</a>
    </div>

    </div>`




}

if ("bos" == cinsiyet && "bos" ==yas  && user.location.country == location){
        
    return icerik.innerHTML += 

    `<div class="flex-item"> 
    <img src=${user.picture.large} alt=${user.name.first}>
    <h1> ${user.name.fullName}</h1>

    <div class='about-section'>
    
    <h3> Hakkında </h3>
    <p> Kullanıcı Adı: ${user.login.username}</p>
    <p> Ülke: ${user.location.country}</p>
    <p> Şehir: ${user.location.city} </p>
    <p> Yas: ${user.dob.age} </p>
    
    </div>

    <div class='contact'>
    <span class="material-symbols-outlined">
    favorite
    </span>

    </div>`

    


}

if (user.gender == cinsiyet && "bos" ==yas  && "bos" == location){
            
    return icerik.innerHTML += 

    `<div class="flex-item"> 
    <img src=${user.picture.large} alt=${user.name.first}>
    <h1> ${user.name.fullName}</h1>

    <div class='about-section'>
    
    <h3> Hakkında </h3>
    <p> Kullanıcı Adı: ${user.login.username}</p>
    <p> Ülke: ${user.location.country}</p>
    <p> Şehir: ${user.location.city} </p>
    <p> Yas: ${user.dob.age} </p>
    
    </div>

    <div class='contact'>
    <h3>İletişim</h3>

    <a href = "mailto:${user.email}">Mail Gönder</a>
    </div>

    </div>`




}







    })  
    let fav = document.querySelectorAll(".contact")
    console.log(fav) 
    fav.forEach(function(span){
        span.addEventListener("click",function(event){
            span.classList.toggle("hover")
        })
    }) 
    
})



}

