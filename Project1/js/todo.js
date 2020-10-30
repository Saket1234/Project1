
function todo() {

    var title = document.getElementById('title').value;
    var text1 = document.createTextNode("Blog title: "+title);
    var h3 = document.createElement('h3');
    
    var content = document.getElementById('content').value;
    var text2 = document.createTextNode("Blog content: "+content);
    var p = document.createElement('p');
                                            
    h3.appendChild(text1); 
    p.appendChild(text2); 
    if (title === '') {
        alert('You must write something..')
    } else {
        document.getElementById('myList').appendChild(h3);
        document.getElementById('title').value = '';
    }

    if (content === '') {
        alert('You must write something..')
    } else {
        document.getElementById('myList').appendChild(p);
        document.getElementById('content').value = '';
    }
}

function removeAll() {
    var list = document.getElementsByName("myList");
    list[0].innerHTML = "";
}