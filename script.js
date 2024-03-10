
                      
                 const Address = document.querySelector(".Address");
                      // Api to get user location
                      let apiEndpoint = "https://api.opencagedata.com/geocode/v1/json";
                      let apiKey = "YOUR API KEY";

                      const getUserCurrentAddress = async (latitude, longitude) => {
                        let query = `${latitude},${longitude}`;
                        let apiUrl = `${apiEndpoint}?key=${apiKey}&q=${query}&pretty=1`;

                        try {
                          const res = await fetch(apiUrl);
                          const data = await res.json();
                          console.log(data);
                          Address.textContent=`${data.results[0].formatted}`;
                        } catch (error) {
                          console.log(error);
                        }
                      };
                        
                      document.querySelector("#geo-btn").addEventListener("click",() =>{  
                        if(navigator.geolocation){
                          navigator.geolocation.watchPosition(
                            (position)=>{
                              // console.log(position.coords.latitude);
                              const { latitude , longitude}= position.coords;
                              // Address.textContent=`the latitude ${latitude} & longitude ${longitude}`;
                              getUserCurrentAddress(latitude,longitude);

                          },(error)=>{
                            Address.textContent=error.message ;
                            console.log(error.message);
                          });
                        }
                      });
                    