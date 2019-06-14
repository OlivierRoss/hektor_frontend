function add_images (n) {
    if(chargement_termine) return;

    if (n >= oeuvres.length) {
        chargement_termine = true;
        n = oeuvres.length;
    }

    var elems = [];
    var fragment = document.createDocumentFragment();
    for ( var i = 0; i < n; i++  ) {
        var elem = getItemElement();
        fragment.appendChild( elem  );
        elems.push( elem  );
    }
    // append elements to container
    grid.appendChild(fragment);
    // add and lay out newly appended elements
    msnry.appended(elems);
    msnry.reloadItems();
    msnry.layout();
}

function getItemElement() {
    var elem = document.createElement('div');
    var img = document.createElement('img');
    img.src = oeuvres.shift();
    elem.appendChild(img);
    elem.className = 'grid-item';
    return elem;
}
