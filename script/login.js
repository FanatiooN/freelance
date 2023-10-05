async function login() {

    const service = document.getElementById("loginServices").value;
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const response = await fetch("/main.py", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            service: service,
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