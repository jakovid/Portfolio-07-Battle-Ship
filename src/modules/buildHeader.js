function buildHeader() {
    let destination = document.getElementById('header');
    //create elements
    let headerBox = document.createElement('div');
    let headerTitle = document.createElement('div');

    //add id
    headerBox.id = 'headerBox';
    headerTitle.id = 'headerTitle';

    //add inner html
    headerTitle.innerHTML = 'Battleship';

    //append items
    headerBox.append(headerTitle);
    destination.append(headerBox);
}

export { buildHeader };