function createCard(data) {
    return `
        <div class="track-card" id="${data.id}">
            <img src="${data.coverUrl}">
            <div class="card-info">
                <h3>${data.title}</h3>
                <p>${data.artist}</p>
            </div>
            <button onclick="deleteRelease('${data.id}')" class="delete-btn">УДАЛИТЬ</button>
        </div>
    `;
}
