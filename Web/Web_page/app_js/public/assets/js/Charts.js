/**
 * @param {number} alpha Indicates the transparency of the color
 * @returns {string} A string of the form 'rgba(240, 50, 123, 1.0)' that represents a color
 */
function random_color(alpha = 1.0) {
    const r_c = () => Math.round(Math.random() * 255);
    return `rgba(${r_c()}, ${r_c()}, ${r_c()}, ${alpha})`;
  }
  
  Chart.defaults.font.size = 16;
  
  
  // Function to fetch data and plot the charts
  async function fetchDataAndPlotCharts() {
    try {
      const levels_response = await fetch('http://localhost:5500/api/chef', {
        method: 'GET',
      });
  
      console.log('Got a response correctly');
  
      if (levels_response.ok) {
        console.log('Response is ok. Converting to JSON.');
  
        let results = await levels_response.json();
  
        console.log(results);
        console.log('Data converted correctly. Plotting chart.');
        
        const values = Object.values(results);
        const colors = ["#eb5e28", "#7209b7"]; 
        const eye_names = values.map((e) => e['eye_color']);
        const eye_colors = values.map((e, index) => colors[index % colors.length]); 
        const eye_borders = values.map(e => 'rgba(0, 0, 0, 1.0)');
        const eye_color_count = values.map(e => e['count']);
        console.log(eye_color_count);
        const ctx_levels1 = document.getElementById('apiChart2').getContext('2d');
        const levelChart1 = new Chart(ctx_levels1, {
          type: 'pie',
          data: {
            labels: eye_names,
            datasets: [
              {
                label: 'Color:',
                backgroundColor: eye_colors,
                borderColor: eye_borders,
                data: eye_color_count
              }
            ]
          }
        });
  
    
      }
    } catch (error) {
      console.log(error);
    }


    //SEGUNDO FETCH SKIN 
    try {
      const chef2_response = await fetch('http://localhost:5500/api/chef2', {
        method: 'GET',
      });
  
      console.log('Got a response correctly');
  
      if (chef2_response.ok) {
        console.log('Response is ok. Converting to JSON.');
  
        let results = await chef2_response.json();
  
        console.log(results);
        console.log('Data converted correctly. Plotting chart.');
        
        const values = Object.values(results);
        const colors = ["#0d0d0c", "#ffd500", "#f7f7f2", "#7209b7"]; 
        const skin_names = values.map((e) => e['skin_color']);
        const skin_colors = values.map((e, index) => colors[index % colors.length]); 
        const skin_borders = values.map(e => 'rgba(0, 0, 0, 1.0)');
        const skin_color_count = values.map(e => e['count']);
        console.log(skin_color_count);
        const ctx_levels2 = document.getElementById('apiChart3').getContext('2d');
        const levelChart2 = new Chart(ctx_levels2, {
          type: 'pie',
          data: {
            labels: skin_names,
            datasets: [
              {
                label: 'Color:',
                backgroundColor: skin_colors,
                borderColor: skin_borders,
                data: skin_color_count
              }
            ]
          }
        });
  
    
      }
    } catch (error) {
      console.log(error);
    }

    //TERCER FETCH Nacionalidades 
    try {
      const nat_response = await fetch('http://localhost:5500/api/nationality', {
        method: 'GET',
      });
  
      console.log('Got a response correctly');
  
      if (nat_response.ok) {
        console.log('Response is ok. Converting to JSON.');
  
        let results = await nat_response.json();
  
        console.log(results);
        console.log('Data converted correctly. Plotting chart.');
        
        const values = Object.values(results);
        const colors = ["#4f772d", "#fdc500","#00509d"]; 
        const nat_names = values.map((e) => e['nationality']);
        const nat_colors = values.map((e, index) => colors[index % colors.length]); 
        const nat_borders = values.map(e => 'rgba(0, 0, 0, 1.0)');
        const nationality = values.map(e => e['count']);
        console.log(nationality);
        const ctx_levels3 = document.getElementById('apiChart4').getContext('2d');
        const levelChart3 = new Chart(ctx_levels3, {
          type: 'bar',
          data: {
          labels: nat_names,
          datasets: [
          {
            label: 'Nationality',
            backgroundColor: nat_colors,
            borderColor: nat_borders,
            borderWidth: 2,
            data: nationality
          }   
            ] 
          }
        });

  
    
      }
    } catch (error) {
      console.log(error);
    }

   
     //QUINTO FETCH Top 
     try {
      const top_response = await fetch('http://localhost:5500/api/top', {
        method: 'GET',
      });
  
      console.log('Got a response correctly');
  
      if (top_response.ok) {
        console.log('Response is ok. Converting to JSON.');
  
        let results = await top_response.json();
  
        console.log(results);
        console.log('Data converted correctly. Plotting chart.');
        
        const values = Object.values(results);
        const colors = ["#00296b", "#003f88", "#00509d", "#fdc500","#ffd500"]; 
        const top_names = values.map((e) => e['username']);
        const top_colors = values.map((e, index) => colors[index % colors.length]); 
        const top_borders = values.map(e => 'rgba(0, 0, 0, 1.0)');
        const top = values.map(e => e['points']);
        console.log(top);
        const ctx_levels1 = document.getElementById('apiChart1').getContext('2d');
        const levelChart1 = new Chart(ctx_levels1, {
        type: 'bar',
        data: {
        labels: top_names,
        datasets: [
        {
        label: 'Points',
        backgroundColor: top_colors,
        borderColor: top_borders,
        borderWidth: 2,
        data: top
        }
        ]
        }
        });
        


  
    
      }
    } catch (error) {
      console.log(error);
    }

       //TERCER FETCH Upgrades  
       try {
        const up_response = await fetch('http://localhost:5500/api/SKTRUP', {
          method: 'GET',
        });
    
        console.log('Got a response correctly');
    
        if (up_response.ok) {
          console.log('Response is ok. Converting to JSON.');
    
          let results = await up_response.json();
    
          console.log(results);
          console.log('Data converted correctly. Plotting chart.');
          
          const values = Object.values(results);
          const colors = ["#fffcf2", "#ffc2d1", "#fdc500"]; 
          const up_names = values.map((e) => e['upgrade']);
          const up_colors = values.map((e, index) => colors[index % colors.length]); 
          const up_borders = values.map(e => 'rgba(0, 0, 0, 1.0)');
          const upgrades = values.map(e => e['count']);
          console.log(upgrades);
          const ctx_levels5 = document.getElementById('apiChart5').getContext('2d');
          const levelChart5 = new Chart(ctx_levels5, {
            type: 'bar',
            data: {
            labels: up_names,
            datasets: [
            {
              label: 'Upgrade',
              backgroundColor: up_colors,
              borderColor: up_borders,
              borderWidth: 2,
              data: upgrades
            }   
              ] 
            }
          });
  
    
      
        }
      } catch (error) {
        console.log(error);
      }
  }
  
  // Call the function to fetch data and plot the charts
  fetchDataAndPlotCharts();
  