import React from 'react';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/action/favorite-border';

const PhotoItem = ({ photo }) => {
  const imageUrl = photo.images.standard_resolution.url,
        link = photo.link,
        id = photo.id

        let description = "",
        username = ""
        try {
            description = photo.caption.text
            username = photo.caption.from.username
          } catch (e) {
            console.log("no description");
          }


  return (
    <GridTile
      key={id}
      title={description}
      subtitle={<span>by <b>{username}</b></span>}
      actionIcon={<IconButton href={link} ><StarBorder color="white" /></IconButton>}
    >
      <img src={imageUrl} alt={description}/>
    </GridTile>
  );
}

export default PhotoItem;
