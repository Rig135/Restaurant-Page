export default function loadContacts() {

    const mainContent = document.querySelector('#content');
    mainContent.innerHTML = "";
    mainContent.classList.remove('fade-in');

    const h2 = document.createElement('h2');
    h2.id = 'Contacts';
    h2.innerText = 'Contact Us';

    const container = document.createElement('div');
    container.id = 'container';

    const address = document.createElement('div');
    address.id = 'address';

    const h3Address = document.createElement('h3');
    h3Address.innerText = 'ADDRESS';
    address.appendChild(h3Address);

    const para1 = document.createElement('p');
    para1.innerText = 'Viale la Pelosa, 07040 Stintino, Sardinia, Italy';
    address.appendChild(para1);

    const h3Phone = document.createElement('h3');
    h3Phone.innerText = 'PHONE NUMBER';
    address.appendChild(h3Phone);

    const para2 = document.createElement('p');
    para2.innerText = '+39 02 5555 5555';
    address.appendChild(para2);

    const h3Email = document.createElement('h3');
    h3Email.innerText = 'EMAIL ADDRESS';
    address.appendChild(h3Email);

    const para3 = document.createElement('p');
    para3.innerText = 'contact@me.com';
    address.appendChild(para3);

    const timings = document.createElement('div');
    timings.id = 'timings';

    const h3Timing = document.createElement('h3');
    h3Timing.innerText = 'OPENING HOURS';
    timings.appendChild(h3Timing);

    const para4 = document.createElement('p');
    para4.innerText = 'Monday-Friday: 8:00 AM - 11:00 PM';
    timings.appendChild(para4);

    const para5 = document.createElement('p');
    para5.innerText = 'Saturday-Sunday: 10:00 AM - 11:00 PM';
    timings.appendChild(para5);

    address.appendChild(timings);


    const Reservation = document.createElement('div');
    Reservation.id = 'Reservation';

    const h3BookTable = document.createElement('h3');
    h3BookTable.innerText = 'Book a Table';
    Reservation.appendChild(h3BookTable);

    const form = document.createElement('form');
    form.id = 'bookingDetails';
    Reservation.appendChild(form);

    const row = document.createElement('div');
    row.id = 'row';
    form.appendChild(row);

    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.id = 'name';
    input1.placeholder = 'Your name';
    input1.required = true;
    row.appendChild(input1);

    const input2 = document.createElement('input');
    input2.type = 'email';
    input2.id = 'email';
    input2.placeholder = 'Your Email';
    input2.required = true;
    row.appendChild(input2);

    const input3 = document.createElement('input');
    input3.type = 'text';
    input3.id = 'subject';
    input3.placeholder = 'Subject';
    input3.required = true;
    form.appendChild(input3);

    const textArea = document.createElement('textArea');
    textArea.id = 'message';
    textArea.placeholder = 'Message';
    form.appendChild(textArea);

    const Button = document.createElement('button');
    Button.innerText = 'BOOK A TABLE';
    Reservation.appendChild(Button);



    mainContent.appendChild(h2);
    container.appendChild(address);
    container.appendChild(Reservation);

    mainContent.appendChild(container);

    void mainContent.offsetWidth;

    mainContent.classList.add('fade-in');
}