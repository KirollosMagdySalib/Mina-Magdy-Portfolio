document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      // ✅ نجح
      showToast('successToast');
      form.reset();
    } else {
      // ❌ فشل
      showToast('errorToast');
    }
  } catch (error) {
    // ❌ خطأ في الشبكة
    showToast('errorToast');
  }
});

function showToast(id) {
  const toastEl = document.getElementById(id);
  const toast = new bootstrap.Toast(toastEl, { delay: 4000 });
  toast.show();
}
