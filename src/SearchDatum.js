export default class SearchDatum {
  constructor(aid, url) {
    this.aid = aid; //TODO: This should be called 'id', and just happens to be set to 'aid' for results from the server
    this.url = url;
    this.selections = {
      stack: [[]],
      current: 0,
    };
  }

  clone() {
    const c = Object.create(this);
    c.selections = this.cloneSelections();
    return c;
  }

  cloneSelections() {
    return {
      stack: this.selections.stack.map((a) => { return a.slice(); }),
      current: this.selections.current,
    };
  }
}
