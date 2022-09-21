<template>
  <div class="hello">
    <div class="vehicle-list">
      <table class="vehicle-table">
        <thead>
          <tr>
            <th>VEHICLE TYPE</th>
            <th>VEHICLE NUMBER</th>
            <th>DATE/TIME</th>
            <th>TOLL NAME</th>
            <th>TARIFF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
          </tr>
          <tr>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 2</td>
          </tr>
          <tr>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
          </tr>
          <tr>
            <td>Content 4</td>
            <td>Content 4</td>
            <td>Content 4</td>
            <td>Content 4</td>
            <td>Content 4</td>
          </tr>
          <tr>
            <td>Content 5</td>
            <td>Content 5</td>
            <td>Content 5</td>
            <td>Content 5</td>
            <td>Content 5</td>
          </tr>
          <tr>
            <td>Content 6</td>
            <td>Content 6</td>
            <td>Content 6</td>
            <td>Content 6</td>
            <td>Content 6</td>
          </tr>
          <tr>
            <td>Content 7</td>
            <td>Content 7</td>
            <td>Content 7</td>
            <td>Content 7</td>
            <td>Content 7</td>
          </tr>
          <tr>
            <td>Content 8</td>
            <td>Content 8</td>
            <td>Content 8</td>
            <td>Content 8</td>
            <td>Content 8</td>
          </tr>
          <tr>
            <td>Content 9</td>
            <td>Content 9</td>
            <td>Content 9</td>
            <td>Content 9</td>
            <td>Content 9</td>
          </tr>
          <tr>
            <td>Content 10</td>
            <td>Content 10</td>
            <td>Content 10</td>
            <td>Content 10</td>
            <td>Content 10</td>
          </tr>
        </tbody>
        <tbody></tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
*{
    /* box-sizing: border-box; */
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}
body{
    /* font-family: Helvetica; */
    -webkit-font-smoothing: antialiased;
    /* background: rgba( 71, 147, 227, 1); */
}

/* Table Styles */

.vehicle-list{
    /* margin: 10px 70px 70px; */
    box-shadow: 0px 5px 10px rgba( 0, 0, 0, 0.2 );
}

.vehicle-table {
    border-radius: 5px;
    /* font-size: 12px; */
    /* font-weight: normal; */
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
}

.vehicle-table td, .vehicle-table th {
    text-align: left;
    padding: 12px;
}

.vehicle-table td {
    border-bottom: 2px solid #f8f8f8;
    /* font-size: 12px; */
}

.vehicle-table thead th {
    color: #858383;
    background: #f0f0f0;
}


/* .vehicle-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
}

.vehicle-table tr:nth-child(even) {
    background: #F8F8F8;
} */

/* Responsive */

/* @media (max-width: 767px) {
    .vehicle-table {
        display: block;
        width: 100%;
    }
    .vehicle-list:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
    .vehicle-table thead, .vehicle-table tbody, .vehicle-table thead th {
        display: block;
    }
    .vehicle-table thead th:last-child{
        border-bottom: none;
    }
    .vehicle-table thead {
        float: left;
    }
    .vehicle-table tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .vehicle-table td, .vehicle-table th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }
    .vehicle-table thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .vehicle-table tbody tr {
        display: table-cell;
    }
    .vehicle-table tbody tr:nth-child(odd) {
        background: none;
    }
    .vehicle-table tr:nth-child(even) {
        background: transparent;
    }
    .vehicle-table tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
    .vehicle-table tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
    .vehicle-table tbody td {
        display: block;
        text-align: center;
    }
} */
</style>
