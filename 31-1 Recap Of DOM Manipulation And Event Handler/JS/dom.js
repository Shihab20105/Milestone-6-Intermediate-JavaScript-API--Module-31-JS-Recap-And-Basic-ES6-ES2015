/*                      31-1 Recap of DOM Manipulation and event handler */

document.getElementById('apply-bg').addEventListener('click', function(){
    //console.log('Apply background')
    const friends = document.getElementsByClassName('friend');
    //console.log(friends);
    for(const friend of friends){
        //console.log(friend);
        friend.style.backgroundColor = 'lightblue';

    }
} );

document.getElementById('center-third').addEventListener('click',function(){
   //console.log('Centering');
   const third = document.getElementById('third-friend');
   third.style.textAlign = 'center';
});


document.getElementById('add-friend').addEventListener('click', function(){
    //console.log('Adding');
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>Something new added</p>
    `
    friendContainer.appendChild(friend);
})