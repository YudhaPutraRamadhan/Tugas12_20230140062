function kirimPesanan() {
  const nama = document.getElementById("nama").value;
  const hp = document.getElementById("hp").value;
  const menu = document.getElementById("menu").value;
  const tanggal = document.getElementById("tanggal").value;
  const pembayaran = document.getElementById("pembayaran").value;
  const catatan = document.getElementById("catatan").value;

  alert(
    `Pesanan berhasil dikirim!\n\nNama: ${nama}\nNo. HP: ${hp}\nMenu: ${menu}\nTanggal: ${tanggal}\nPembayaran: ${pembayaran}\nCatatan: ${catatan}`
  );
}