document.addEventListener('DOMContentLoaded', function () {
    var imageCounter = 0;

    document.getElementById('imageInput').addEventListener('change', function (event) {
        var fileInput = event.target;
        var file = fileInput.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var imageUrl = e.target.result;
                addImageToTable(imageUrl);
                // Reset file input after image is added
                fileInput.value = '';
            }
            reader.readAsDataURL(file);
        }
    });

    function addImageToTable(imageUrl) {
        imageCounter++;
        var tableBody = document.getElementById('imageTableBody');
        var newRow = tableBody.insertRow();
        var countCell = newRow.insertCell(0);
        var imageCell = newRow.insertCell(1);
        countCell.textContent = imageCounter;

        var imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.classList.add('thumbnail');
        imageCell.appendChild(imgElement);
    }
});
