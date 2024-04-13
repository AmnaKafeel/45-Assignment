
function make_album(Artist: string, Title: string, Tracks?: number){

    const album: {Artist: string, Title: string, Tracks?: number} ={

        Artist : Artist,
        Title : Title, 
        
    }
    if(Tracks !== undefined){
        album.Tracks = Tracks;
    }
    
    return album;
}
const album1 = make_album('Artist 1', 'Album Title 1');
console.log(album1);

const album2 = make_album('Artist 2', 'Album Title 2');
console.log(album2);

const album3 = make_album('Artist 3', 'Album Title 3', 12);
console.log(album3);