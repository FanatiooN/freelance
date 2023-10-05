async function register() {

    const service = document.getElementById("registrationServices").value;
    const name = document.getElementById("registrationName").value;
    const email = document.getElementById("registrationEmail").value;
    const password = document.getElementById("registrationPassword").value;

    const response = await fetch("/main.py", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            service: service,
            name: name,
            email: email,
            password: password
        })
    });
    if (response.ok) {
        const data = await response.json();
        document.getElementById("message").textContent = data.message;
    }
    else
        console.log(response);
}