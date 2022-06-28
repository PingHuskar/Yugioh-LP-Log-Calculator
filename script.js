
var log1 = ["-500","/2","*3","**2","200","**2"]
var log2 = ["+500","*2","/4","**2","450","**2"]

const searchParam = new URLSearchParams(window.location.search)
var bg = searchParam.get('bg') !== null ? searchParam.get('bg') : "000"
bg = (/[\da-f]{7,}/i.test(bg)) ? bg.slice(0,6): bg
document.body.style.backgroundColor = (/[\da-f]{6}|[\da-f]{3}/i.test(bg)) ? `#${bg}` : bg
var newLP1;
function updateLP1(boo) {
    LP1 = 8000
    document.getElementById('log1').value = log1
    document.getElementById('LP1').innerHTML = `<div class="alert alert-${lpLv(LP1)} alert-dismissible"><strong>${LP1}</strong></div>`
    for (var i = 0; i < log1.length; i++) {
        if (/\d+/.test(log1[i].charAt(0))) {
            LP1 = eval(log1[i])
            // document.getElementById('LP1').innerHTML += `LP1=${LP1}<br>`
            document.getElementById('LP1').innerHTML += `<div class="alert alert-${lpLv(LP1)} alert-dismissible LP1" id="${i}"><button type="button"  class="close" data-dismiss="alert">&times;</button><strong>${LP1}</strong></div>`
        }
        else {
            newLP1 = eval(LP1+log1[i])
            // document.getElementById('LP1').innerHTML += `${LP1}${log1[i].toString()}=${newLP1}<br>`
            document.getElementById('LP1').innerHTML += `<div class="alert alert-${lpLv(newLP1)} alert-dismissible LP1" id="${i}"><button type="button"  class="close" data-dismiss="alert">&times;</button><strong>${newLP1}</strong> = ${LP1}${log1[i].toString()}</div>`
            LP1 = newLP1
        }
        if (LP1 <= 0) {
            document.getElementById('LP1').innerHTML += `<div class="alert alert-${lpLv(LP2)} alert-dismissible LP1" id="${i}"><button type="button"  class="close" data-dismiss="alert">&times;</button><strong>You Lose</strong> LP = 0</div>`
            break
        }
    }
    refreshLP1()
}
function refreshLP1() {
    const p1LPlog = document.querySelectorAll('.LP1')
    for (var i = 0; i< p1LPlog.length; i++) {
        p1LPlog[i].addEventListener('click', function () {
            delete log1[this.id]
            log1 = log1.filter(n => n)
            console.log(log1)
            updateLP1(false)
        })
    }
}
updateLP1(true)
document.getElementById('log1').value = log1
function editLP1(val) {
    log1 = val.split(',')
    updateLP1(true)
}

function lpLv(currentLP) {
    if (currentLP >= 8000) {
        return 'success'
    }
    else if (currentLP >= 4000) {
        return 'info'
    }
    else if (currentLP < 2000) {
        return 'danger'
    }
    else {
        return 'warning'
    }
}

var newLP2;
function updateLP2(boo) {
    LP2 = 8000
    document.getElementById('log2').value = log2
    document.getElementById('LP2').innerHTML = `<div class="alert alert-primary alert-dismissible"><strong>${LP2}</strong></div>`
    for (var i = 0; i < log2.length; i++) {
        if (/\d+/.test(log2[i].charAt(0))) {
            LP2 = eval(log2[i])
            document.getElementById('LP2').innerHTML += `<div class="alert alert-${lpLv(LP2)} alert-dismissible LP2" id="${i}"><button type="button"  class="close" data-dismiss="alert">&times;</button><strong>${LP2}</strong></div>`
        }
        else {
            newLP2 = eval(LP2+log2[i])
            document.getElementById('LP2').innerHTML += `<div class="alert alert-${lpLv(newLP2)} alert-dismissible LP2" id="${i}"><button type="button"  class="close" data-dismiss="alert">&times;</button><strong>${newLP2}</strong> = ${LP2}${log2[i].toString()}</div>`
            LP2 = newLP2
        }
        if (LP2 <= 0) {
            document.getElementById('LP2').innerHTML += `<div class="alert alert-${lpLv(LP2)} alert-dismissible LP2" id="${i}"><button type="button"  class="close" data-dismiss="alert">&times;</button><strong>You Lose</strong> LP = 0</div>`
            break
        }
    }
    refreshLP2()
}
function refreshLP2() {
    const p2LPlog = document.querySelectorAll('.LP2')
    for (var i = 0; i< p2LPlog.length; i++) {
        p2LPlog[i].addEventListener('click', function () {
            delete log2[this.id]
            log2 = log2.filter(n => n)
            console.log(log2)
            updateLP2(false)
        })
    }
}
updateLP2(true)
document.getElementById('log2').value = log2
function editLP2(val) {
    log2 = val.split(',')
    updateLP2(true)
}