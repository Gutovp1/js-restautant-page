export default function contactTab(){
    const container = document.getElementById('content');
    container.textContent = "";

    const contactForm = document.createElement('form');
    const formTitle = document.createElement('h1');
    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');
    const textLabel = document.createElement('label');
    const textArea = document.createElement('textarea');
    const btnForm = document.createElement('button');

    formTitle.classList.add('title');
    formTitle.textContent = "Contact us";
    contactForm.setAttribute('action','#');
    contactForm.setAttribute('method', 'post');

    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name:';
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'user_name');
    nameInput.setAttribute('placeholder', 'Your Full Name');

    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'E-mail:';
    emailInput.setAttribute('type', 'text');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'user_email');
    emailInput.setAttribute('placeholder', 'Your E-mail');

    textLabel.setAttribute('for', 'message');
    textLabel.textContent = 'Message:';
    textArea.setAttribute('id', 'message');
    textArea.setAttribute('name', 'user_message');

    btnForm.setAttribute('type','submit');
    btnForm.textContent = 'Submit';
    btnForm.onclick = (e => e.preventDefault()); //do not refresh the page. It is just a demonstration

    container.appendChild(formTitle);
    contactForm.appendChild(nameLabel);
    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(textLabel);
    contactForm.appendChild(textArea);
    contactForm.appendChild(btnForm);

    container.appendChild(contactForm);
    
    return;
}