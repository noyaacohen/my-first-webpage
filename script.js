
function changePage(pageName) {
    const dynamicBody = document.getElementById('dynamic-body');


            
    if (pageName === 'products') {
        dynamicBody.innerHTML = `
            <div style="text-align:center; padding: 50px;">
                <h2 style="color: #ff69b4;">Recommended Products</h2>
                <p>Soon you'll see here the best products for curly hair!</p>
             <h1>curly hair routines</h1>
<div class="header-container">
<h2>natural</h2>
<img src="https://img.lovepik.com/free-png/20211231/lovepik-botanical-leaves-shapes-picture-png-image_401093652_wh860.png" alt="leaf" class="leaf">
</div>

<div>
<img src=https://naturalformula.co.il/wp-content/uploads/2023/07/7290108357165-768x768.jpg alt="moisturizing cream" class="natural1Cream">   

<br><a href="https://shop.super-pharm.co.il/care/hair-care/hair-care/hair-mosterizer" class="natural1CreamButton" target="_blank">buy now 
</a>   
</div>
        `;
    } 
    else if (pageName === 'wavy') {
        dynamicBody.innerHTML = `
            <div style="text-align:center; padding: 50px;">
                <h2 style="color: #ff69b4;">Wavy Hair Care</h2>
                <p>Tips and routines for wavy hair types.</p>
            </div>
        `;
    }
    

    else if (pageName==='myRoutines')

    dynamicBody.innerHTML= `
    
    <div id="dynamic-body">
        <div class="sub-topics">
            <button class="sub-btn" onclick="openRoutine('dry')">מתולתל יבש</button>
            <button class="sub-btn" onclick="openRoutine('oily')">מתולתל שומני</button>
            <button class="sub-btn" onclick="openRoutine('definition')">הגדרת תלתלים</button>
        </div>

        <div id="overlayId" class="dark-overlay" onclick="closeRoutine()"></div>

        <div id="routineBox" class="routine-modal">
            <span class="close-btn" onclick="closeRoutine()">&times;</span>
            <div id="routineContent"></div> 
        </div>

        <div class="grid-container">
            <img src="//i.pinimg.com/originals/b2/22/13/b22213f32210ad40a31d8e8c7e1adfdd.jpg" class="curly1">
            <img src="//i.pinimg.com/736x/0e/c2/a2/0ec2a2fb0426f4ef5b48f92bbac58cda.jpg" class="curly2">
            <img src="//i.pinimg.com/originals/d9/d5/8b/d9d58bd75573ab5faf876da2daf6ae9d.jpg" class="curly3">
            <img src="//bompenteados.com/wp-content/uploads/2022/02/1644587465_613_Top-5-Penteados-em-Curly-Hair-Coimbra.jpg" class="curly4">
            <img src="//i.pinimg.com/originals/f2/68/c9/f268c9e5f3a85d78d4c6e2778be655a3.jpg" class="curly5">
        </div>
    </div>
    `
    

}




function toggleRoutine(){
    const overlay = document.getElementById('overlayId');
    const modal = document.getElementById('routineBox');


    if (modal.style.display === "block") {
        modal.style.display = "none";
        overlay.style.display = "none";
    } else {
        modal.style.display = "block";
        overlay.style.display = "block";
        }
} 
 


function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const target = document.getElementById(sectionId);
    if (target) target.style.display = 'block';
}

const allRoutines = {
    'dry': `
        <h3>שגרה למתולתל יבש 🌵</h3>
        <ul>
            <li>1. חפיפה עם שמפו ללא סולפטים</li>
            <li>2. מסיכה עשירה ל-10 דקות</li>
            <li>3. קרם לחות על שיער רטוב מאוד</li>
            <li>4. שמן בקצוות לסגירת הלחות</li>
            <li>... עוד שלבים שאפשר לגלול ...</li>
        </ul>
    `,
    'oily': `
        <h3>שגרה למתולתל שומני 💧</h3>
        <ul>
            <li>1. שמפו מנקה לעומק</li>
            <li>2. מרכך רק בקצוות</li>
            <li>3. ג'ל קליל להגדרה</li>
        </ul>
    `,
    'definition': `
        <h3>טיפים להגדרת תלתלים ✨</h3>
        <p>כאן תכתבי את כל השלבים להגדרה מושלמת...</p>
    `
};

function openRoutine(type) {
    const modal = document.getElementById('routineBox');
    const overlay = document.getElementById('overlayId');
    const content = document.getElementById('routineContent');


    content.innerHTML = allRoutines[type];

    
    modal.style.display = "block";
    overlay.style.display = "block";
}

function closeRoutine() {
    document.getElementById('routineBox').style.display = "none";
    document.getElementById('overlayId').style.display = "none";
}