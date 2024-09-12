<template>
  <main>
    <div class="hero">
      <header>
        <img width="87px" src="../img/isotipo.SVG" alt="" srcset="">
        <button>Contact me</button>
        
      </header>
      <div class="hero-text">
        <div>
          <h1>
            Jhan Carranza
          </h1>
          <h1 class="sft">
            Software engineer
          </h1>
        </div>
        <h2>Passionate about beauty, I give life to projects that captivate and convert</h2>
        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z" fill="white"/>
</svg>Trabajemos juntos</button>
      </div>

    </div>

  </main>
</template>

<style scoped>
main{
  background-image: url(../img/bg-primary.png);
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
}
.hero{
  width: 100%;
  max-width: 1280px;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
}
div{
  color: #fff;
}
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding:0 40px ;
  height: 70px;
  
}
.hero-text{
  display: flex;
  /* margin-right: 100px; */
 max-height:90vh;
 height: 100%;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 38px;
  flex: 1 0 0;
  align-self: stretch;
  padding: 0 40px;
}
h1{
  text-align: center;
  color: var(--background-color, #FFF);
  font-family: "Lucida Sans";
  font-size: 8vh;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -7.68px;
}
.sft{
  background: linear-gradient(177deg, #FFF 27.92%, #6CDFFF 151.48%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
h2{
  color: #C2C2C2;
  font-family: "Lucida Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
}
button{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #FFF;
  border: 1px solid #fff;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 50px;
  font-family: "Lucida Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(3deg, #C5F2FF -112.8%, #FFF 271.97%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  
}
</style>
