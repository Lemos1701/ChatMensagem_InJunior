function enviar_message() {
    let input = document.querySelector(".inputBox");
    let hub_message = document.querySelector(".messageBox");
    
    if (input.value == "") {
        return;
    }

    let div_message = document.createElement("div");
    let div_text = document.createElement("div");
    let message = document.createElement("p");
    let div_button = document.createElement("div");
    let delete_button = document.createElement("button");
    let edit_button = document.createElement("button");

    message.innerText = input.value;
    input.value = "";

    delete_button.innerText = "Delete";
    edit_button.innerText = "Edit";

    div_button.append(edit_button, delete_button);
    div_text.append(message);
    div_message.append(div_text, div_button);

    delete_button.classList.add("delete");
    edit_button.classList.add("edit");
    
    div_text.classList.add("text");
    div_button.classList.add("buttons");
    div_message.classList.add("message");

    hub_message.append(div_message);

    // Adiciona o evento de clique ao botão de deletar para remover a message específica
    delete_button.addEventListener("click", () => {
        div_message.remove();
    });

    edit_button.addEventListener("click", ()=> {
        let message = div_text.querySelector("p");

        let new_input = document.createElement("input");
        new_input.value = message.innerText;

        message.replaceWith(new_input);

        new_input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                let new_message = document.createElement("p");
                new_message.innerText = new_input.value;
                new_input.replaceWith(new_message);
            }
        });

    });

    hub_message.scrollTop = hub_message.scrollHeight;
}

let buttonEnvia = document.querySelector(".submitButton");
buttonEnvia.addEventListener("click", enviar_message);