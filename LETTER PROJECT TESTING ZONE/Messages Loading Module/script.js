async function main()
{
    await fetchMessages();
    //Message Structure in JSON: Display name, discord/twitter name, message.
    Papa.parse("messages.csv", {
        download: true,
		//To treat the first row as column titles
		header: true,
		complete: (result) => {
            let messageContainer = document.getElementById("main-card-container");
			for(var i = 0; i < result.data.length; i++)
            {
                let message = result.data[i];
                let singleMessageBackground = document.createElement("div");
                singleMessageBackground.classList.add("card-background");
                singleMessageBackground.Style.background-image = url("75957635_p0.jpg");
                let singleMessageText = document.createElement("div");
                singleMessageText.classList.add("card-message");
                singleMessageText.classList.add("hidden-backside");
                singleMessageText.innerText = message;
                
                singleMessageBackground.appendChild(singleMessageText);
                
                messageContainer.appendChild(singleMessageBackground);
                
            }
        }
    }
}

main();