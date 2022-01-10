document.querySelector('#elastic').oninput = function () {
    let val = this.value.trim()
    let elasticItems = document.querySelectorAll('.elastic li')
    if (val !='') {
        elasticItems.forEach(function (elem) {
            if (elem.innerText.toLowerCase().search(val.toLowerCase()) == -1) {
                elem.classList.add('hide')
            }else {
                elem.classList.remove('hide')
            }
        })
    }else {
        elasticItems.forEach(function (elem) {
            elem.classList.remove('hide')
        })
    }
}
    let a = document.querySelector('.abdul')
    let b = document.querySelector('.abdulhafiz')
    a.addEventListener('click', function xafiz(){
        b.style.display = "block"
    })

    let c = document.querySelector('.rizoo')
    let d = document.querySelector('.m-rizo')
    c.addEventListener('click', function rizo() {
        d.style.display = "block"
    })

    let e = document.querySelector('.boriy')
    let f = document.querySelector('.abdulboriy')
    e.addEventListener('click', function bori() {
        f.style.display = "block"
    })

    let g = document.querySelector('.ayubiy')
    let l = document.querySelector('.ayubkhan')
    g.addEventListener('click', function ayub() {
        l.style.display = "block"
    })

    let m = document.querySelector('.hoji')
    let x = document.querySelector('.akbar')
    m.addEventListener('click', function akbar() {
        x.style.display = "block"
    })

    let y = document.querySelector('.joxa')
    let z = document.querySelector('.javo')
    y.addEventListener('click', function akbar() {
        z.style.display = "block"
    })

    let davron = document.querySelector('.dalo')
    let davo = document.querySelector('.davo')
    davron.addEventListener('click', function akbar() {
        davo.style.display = "block"
    })
    
    let shox = document.querySelector('.shaxlo')
    let shoxru = document.querySelector('.zado')
    shox.addEventListener('click', function akbar() {
        shoxru.style.display = "block"
    })

    let ayat = document.querySelector('.oyatillo')
    let avo = document.querySelector('.ova')
    ayat.addEventListener('click', function akbar() {
        avo.style.display = "block"
    })
