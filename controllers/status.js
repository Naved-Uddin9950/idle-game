export const status = () => {
    function openUserModal() {
        var userModal = document.getElementById("userModal");
        userModal.style.display = "block";

        // Retrieve user information from local storage
        var userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (userInfo) {
            var userInfoHTML = `
            <p>Name: ${userInfo.name}</p>
            <p>HP: ${userInfo.hp}</p>
            <p>Strength: ${userInfo.str}</p>
            <p>Level: ${userInfo.level}</p>
            <p>Experience: ${userInfo.experience}</p>
            <p>Gold: ${userInfo.gold}</p>
        `;
            document.getElementById("userInfo").innerHTML = userInfoHTML;
        }
    }

    // Function to close the user modal
    function closeUserModal() {
        var userModal = document.getElementById("userModal");
        userModal.style.display = "none";
    }

    // Event listener for opening the user modal when clicking on the status button
    // document.getElementById("statusButton").addEventListener("click", openUserModal);
    document.querySelector('status').addEventListener('click', openUserModal);

    // Event listener for closing the user modal when clicking on the close button
    document.getElementsByClassName("close")[0].addEventListener("click", closeUserModal);
}