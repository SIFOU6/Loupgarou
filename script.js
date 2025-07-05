function goToRoles() {
  const count = document.getElementById('playerCount').value;
  if (!count || count <= 0) return alert('أدخل عدد اللاعبين');
  localStorage.setItem('playerCount', count);
  alert('هنا سيتم الانتقال لصفحة اختيار الأدوار (قيد التطوير)');
}
function showLog() {
  alert('سجل الجولات سيُعرض هنا (قيد التطوير)');
}
