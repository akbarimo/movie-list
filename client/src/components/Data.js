class Data {
  constructor(data) {
    this.fullData = data || [];
    this.data = [];
  }

  initializeData(data) {
    this.data = data;
  }

  updateData(data) {
    this.data = [...this.data, ...data];
    this.fullData = [...this.fullData, ...data];
  }

  size() {
    return this.data.length;
  }

  retrieve() {
    return this.data;
  }

  requestData(query, CB) {
    const loadedData = new Data(this.fullData);
    for (let i = 0; i < this.fullData.length; i++) {
      if (this.fullData[i].title.toLowerCase().includes(query)) {
        loadedData.data.push(this.fullData[i]);
      }
    }
    CB(loadedData);
  }

}

export default Data;