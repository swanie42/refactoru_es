class Job{
  constructor(jobInfo) {
    this.name = jobInfo.name;
    this.image = jobInfo.image;
    this.description = jobInfo.description;
    this.naddress = jobInfo.address;
    this.city = jobInfo.city;
    this.state = jobInfo.state;
    this.zip = jobInfo.zip;
    this.sqft = jobInfo.sqft;
    this.zones = jobInfo.zones;
    forEach(zone(), add zone.sqft)
  }
}
class Zone extends Job{
  constructor(jobInfo) {
    super()
    this.name = jobInfo.name;
    this.image = jobInfo.image;
    this.sqft = jobInfo.sqft;
    this.zones = jobInfo.zones;
    this.areas = jobInfo.areas;
    this.activities = jobInfo.activities;
    this.components = jobInfo.components;
    this.materials = jobInfo.materials;
    this.actions = jobInfo.actions;
    this.methods = jobInfo.methods;
  }
}
