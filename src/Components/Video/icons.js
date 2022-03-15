

const style ={
  color: 'white',
  width: '100%',
  height: '100%',
}

export const icons = {
  chat: {
    active: <i className="fa-solid fa-comment" style={style}></i>,
    inactive: <i className="fa-solid fa-comment-slash" style={style}></i>,
  },
  promotions: {
    active:<i className="fa-solid fa-store" style={style}></i>,
    inactive:<i className="fa-solid fa-store-slash" style={style}></i>,
  },
  volume: {
    active:<i className="fa-solid fa-volume-high" style={style}></i>,
    inactive:<i className="fa-solid fa-volume-xmark" style={style}></i>,
  },
  pip: <i className="fa-solid fa-tv" style={style}></i>,
  share: <i className="fa-solid fa-share-nodes" style={style}></i>,
  like: <i className="fa-regular fa-heart" style={style}></i>,
}
