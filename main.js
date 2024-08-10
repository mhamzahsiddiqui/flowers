onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
// window.onload = () => {
//     const button = document.getElementById('myButton');
//     button.addEventListener('click', () => {
//       document.body.classList.remove('not-loaded');
//       button.style.display = 'none';
//     });
//   };
  
  
