const landingPagesEnglish = {
    title: 'Get the most important government jobs and private sector jobs daily on your mobile to achieve your ambitions and develop your skills. ',
    subtitle: 'Select your Operator',
    paragraph: 'For Zain subscribers you can unsubscribe send U2 to 703420 for this service price 1 SAR, and subscribers Mobily you can unsubscribe send U10 to the number 606712 price of this service 1 SAR , For STC Subscribers the service price is 1.15 SAR daily (VAT Included). VAT Tax was already paid with a refill card for prepaid subscribers. and to unsubscribe send U 11 to 808883',
    confBox: 'Click Confirm to open the messages composer and send the  activation message and  subscribe',
    confBtn: 'Confirm',
    img: 'img-en.svg'
}
const landingPagesArabic = {
    title: 'احصل على اهم الوظائف الحكومية ووظائف القطاع الخاص يوميا على جوالك لتحقق طموحاتك وتطوير مهاراتك ',
    subtitle: 'إختر مشغل',
    paragraph: 'يمكنك الغاء الاشتراك في أي وقت، لمشتركي زين ارسل غ 2 إلى الرقم 703420 سعر هذه الخدمة 1 ريال ، ومشتركين موبيلي ارسل غ10 إلى الرقم 606712 سعر هذه الخدمة 1 ريال ، بالنسبة لمشتركين الاتصالات السعودية (STC) سعر هذه الخدمة 1.15 ريال يوميا (شامل قيمة الضريبة المضافة) ، تم تحصيل مبلغ الضريبة لعملاء مسبق الدفع عند عملية شحن الرصيد. و لالغاء الاشتراك ارسل غ 11 إلى الرقم 808883',
    confBox : 'اضغط تأكيد وسيتم فتح محرر الرسائل وأرسل الرسالة للتفعيل والاشتراك في الخدمة',
    confBtn: 'تأكيد',
    img: 'img.svg'
}
const languageButton = (language)=>{
    const lgBtn = document.querySelector('#language')
    lgBtn.innerText = `${language}`
}
const changeLgLanding = (language) => {
    const landingTitles = document.querySelector('#init-title')
    const paragraph = document.querySelector('#paragraph')
    const subtitle = document.querySelector('#subtitle')
    const confBox = document.querySelector('.confText')
    const confBtn = document.querySelector('.conf-btn')
    const image = document.querySelector('.img-box')
    landingTitles.innerText = language.title
    paragraph.innerText = language.paragraph
    subtitle.innerText = language.subtitle
    confBox.innerText = language.confBox
    confBtn.innerText = language.confBtn
    image.setAttribute('src', `./assets/images/${language.img}`)
    if(language === landingPagesArabic){
        paragraph.setAttribute('dir', 'rtl')
        landingTitles.setAttribute('dir', 'rtl')
        subtitle.setAttribute('dir', 'rtl')
        confBox.setAttribute('dir', 'rtl')
        confBtn.setAttribute('dir', 'rtl')
    }else{
        paragraph.removeAttribute('dir')
        subtitle.removeAttribute('dir')
        landingTitles.removeAttribute('dir')
        confBox.removeAttribute('dir')
        confBtn.removeAttribute('dir')
    }
}

languageStorage = window.sessionStorage
document.querySelector('#language').addEventListener('click', () => {
    if(languageStorage.getItem('language') === 'English'){
        document.querySelector('body').classList.remove('bg-en')
        changeLgLanding(landingPagesArabic)
        languageButton('ENGLISH')
        languageStorage.setItem('language', 'Arabic')
    }else{
        languageStorage.setItem('language', 'English')
        document.querySelector('body').classList.add('bg-en')
        changeLgLanding(landingPagesEnglish)
        languageButton('عربي')
    }
    
})
if(languageStorage.getItem('language') === 'English'){
    document.querySelector('body').classList.add('bg-en')
    changeLgLanding(landingPagesEnglish)
    languageButton('عربي')
}else{
    document.querySelector('body').classList.remove('bg-en')
    changeLgLanding(landingPagesArabic)
    languageButton('ENGLISH')
}

const operators = document.querySelectorAll('.operator')
operators.forEach(operator => (
    operator.addEventListener('click', () => {
        document.querySelector('body').classList.add('wrapper')
        const url = operator.getAttribute('data-url')
        document.querySelector('.conf-btn').setAttribute('href', url)
})))

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('body').classList.remove('wrapper')
})