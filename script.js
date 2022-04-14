function print_contact(mySkype, myTelegram) {

    const skype = mySkype;
    const Telegram = myTelegram;

    alert('skype: ' + skype + '\nTel: ' + Telegram + '\nTelegram: @helper-store');

    console.log('Пользователь обратился в тех.поддержку');
}

function sayHello(name) {
    alert('Привет, ' + name);
}

    const modal = document.getElementById('ModalGift');
    const openBtn = document.getElementById('ModalGiftBtn');
    const closeBtn = document.getElementById('close');

    openBtn.onclick = function () {
        modal.style.display = 'block';
    }

    closeBtn.onclick = function () {
        modal.style.display = 'none'
    }

    window.onclick = function (event) {
        
        if (event.target === modal) {
            console.log('Закрыть окно')
            modal.style.display = 'none'
        }
    }

    const modal2 = document.getElementById('ModalTP');
    const openBtn2 = document.getElementById('ModalTPBtn');
    const closeBtn2 = document.getElementById('closeTP');

    openBtn2.onclick = function () {
        modal2.style.display = 'block';
    }

    closeBtn2.onclick = function () {
        modal2.style.display = 'none'
    }

    window.onclick = function (event) {
        if (event.target === modal2) {
            modal2.style.display = 'none'
        }
    }

    function rand_tshirt() {

        // Массив картинок:
        const arr = ['img/tshirt-1.jpg', 'img/tshirt-2.jpg', 'img/tshirt-3.jpg'];

        let rand = Math.floor(Math.random() * arr.length);

        document.getElementById('block-img-1').src = arr[rand]

        rand = Math.floor(Math.random() * arr.length);

        document.getElementById('block-img-2').src = arr[rand]
    }