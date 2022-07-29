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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RUYWIoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0ZXh0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCBidG5Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXNcIjtcbiAgICBjb250YWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsJyMnKTtcbiAgICBjb250YWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XG5cbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdOYW1lOic7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndXNlcl9uYW1lJyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBGdWxsIE5hbWUnKTtcblxuICAgIGVtYWlsTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZW1haWwnKTtcbiAgICBlbWFpbExhYmVsLnRleHRDb250ZW50ID0gJ0UtbWFpbDonO1xuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZW1haWwnKTtcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd1c2VyX2VtYWlsJyk7XG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgRS1tYWlsJyk7XG5cbiAgICB0ZXh0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbWVzc2FnZScpO1xuICAgIHRleHRMYWJlbC50ZXh0Q29udGVudCA9ICdNZXNzYWdlOic7XG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsICdtZXNzYWdlJyk7XG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywgJ3VzZXJfbWVzc2FnZScpO1xuXG4gICAgYnRuRm9ybS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcbiAgICBidG5Gb3JtLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgYnRuRm9ybS5vbmNsaWNrID0gKGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTsgLy9kbyBub3QgcmVmcmVzaCB0aGUgcGFnZS4gSXQgaXMganVzdCBhIGRlbW9uc3RyYXRpb25cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChlbWFpbExhYmVsKTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZCh0ZXh0TGFiZWwpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChidG5Gb3JtKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Rm9ybSk7XG4gICAgXG4gICAgcmV0dXJuO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==