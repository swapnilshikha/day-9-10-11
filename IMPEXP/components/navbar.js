afunction navbar(){
    return `
    <a href="home.html">Home</a>
    <a href="login.html">Login</a>
    <a href="about.html">About</a> `;
}
//export default navbar; 
//when we need to export one function. Module cannot have more than one default export.

function next()
{
    return `<a href="home.html>HOME</a>`
}
export {navbar, next};
