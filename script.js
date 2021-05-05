function validInput() {
    let first_name = document.getElementById("first-name").value;
    let last_name = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (first_name === "" || last_name === "" || email === "" || password === "") {
        if (first_name === "") {
            document.getElementById("first-name-error").style.display = "block";
            document.getElementById("first-name-noti").style.display = "block";
        }
    
        if (last_name === "") {
            document.getElementById("last-name-error").style.display = "block";
            document.getElementById("last-name-noti").style.display = "block";
        }
    
        if (email === "") {
            document.getElementById("email-error").style.display = "block";
            document.getElementById("email-noti").style.display = "block";
        }
    
        if (password === "") {
            document.getElementById("password-error").style.display = "block";
            document.getElementById("password-noti").style.display = "block";
        }

    }

    if (first_name !== "") {
        document.getElementById("first-name-error").style.display = "none";
        document.getElementById("first-name-noti").style.display = "none";
    }

    if (last_name !== "") {
        document.getElementById("last-name-error").style.display = "none";
        document.getElementById("last-name-noti").style.display = "none";
    }

    if (email !== "") {
        // Check valid Email
        var mail = email;
        var regex = /^([\w\.]+)@([\w]+)(\.)([\w]+)(.[\w]+)?$/;

            if(regex.test(mail)){
                document.getElementById("email-error").style.display = "none";
                document.getElementById("email-noti").style.display = "none";
            }
            
            else {
                document.getElementById("email-error").style.display = "block";
                document.getElementById("email-noti").innerHTML = 
                "<span style='color:red'> Please provide a valid email";
                document.getElementById("email-noti").style.display = "block";
            }

    }

    if (password !== "") {
        document.getElementById("password-error").style.display = "none";
        document.getElementById("password-noti").style.display = "none";
    }
}