/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactTab)
/* harmony export */ });
function contactTab(){
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0VGFiKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdGV4dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgYnRuRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzXCI7XG4gICAgY29udGFjdEZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCcjJyk7XG4gICAgY29udGFjdEZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAncG9zdCcpO1xuXG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZTonO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3VzZXJfbmFtZScpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgRnVsbCBOYW1lJyk7XG5cbiAgICBlbWFpbExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VtYWlsJyk7XG4gICAgZW1haWxMYWJlbC50ZXh0Q29udGVudCA9ICdFLW1haWw6JztcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlsJyk7XG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndXNlcl9lbWFpbCcpO1xuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIEUtbWFpbCcpO1xuXG4gICAgdGV4dExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ21lc3NhZ2UnKTtcbiAgICB0ZXh0TGFiZWwudGV4dENvbnRlbnQgPSAnTWVzc2FnZTonO1xuICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZScpO1xuICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsICd1c2VyX21lc3NhZ2UnKTtcblxuICAgIGJ0bkZvcm0uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XG4gICAgYnRuRm9ybS50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIGJ0bkZvcm0ub25jbGljayA9IChlID0+IGUucHJldmVudERlZmF1bHQoKSk7IC8vZG8gbm90IHJlZnJlc2ggdGhlIHBhZ2UuIEl0IGlzIGp1c3QgYSBkZW1vbnN0cmF0aW9uXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZW1haWxMYWJlbCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQodGV4dExhYmVsKTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoYnRuRm9ybSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xuICAgIFxuICAgIHJldHVybjtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=