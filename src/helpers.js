function removeTags(str) {
	if (!str) {
    return
  }
  return str.replace( /(<([^>]+)>)/ig, '');
}

export { removeTags }