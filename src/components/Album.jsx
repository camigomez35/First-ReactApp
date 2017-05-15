import React from 'react';
import PhotoItem from './PhotoItem';

import {GridList} from 'material-ui/GridList';

const styles = {
  gridList: {
    width: '700',
    height: '100%',
    overflowY: 'auto',
  },
};

const Album = (props) => {
  const photoItems = props.photos.map( (photo) => {
    return(
      <PhotoItem
        photo={ photo }
        key={ photo.id }
      />
    )
  });

  return (
    <GridList
      cellHeight={250}
      style={styles.gridList}
    >
      { photoItems }
    </GridList>
  );
}

export default Album;
