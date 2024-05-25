document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dashboard-link').addEventListener('click', function() {
      window.location.href = 'Dashboard.html';
    });
  
    document.getElementById('reports-link').addEventListener('click', function() {
      window.location.href = 'reports.html';
    });
  
    document.getElementById('products-link').addEventListener('click', function() {
      window.location.href = 'productgraph.html';
    });
  
   document.getElementById('supplier-link').addEventListener('click', function() {
      window.location.href = 'supplier.html';
    });
    document.getElementById('logout').addEventListener('click', function() {
        window.location.href = 'login.html';
      }); 
  });

