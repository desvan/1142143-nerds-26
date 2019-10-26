var contactsBtn = document.querySelector(".contacts-btn");
var modalWriteUs = document.querySelector(".modal-write");
var modalClose = modalWriteUs.querySelector(".modal-close");
var writeUsForm = modalWriteUs.querySelector(".write-form");
var writeUsName = writeUsForm.querySelector("[name=name]");
var writeUsEmail = writeUsForm.querySelector("[name=email]");
var writeUsMessage = writeUsForm.querySelector("[name=message]");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

if (contactsBtn && modalWriteUs) {
  contactsBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalWriteUs.classList.add("modal-opened");
    if (storageName) {
      writeUsName.value = storageName;
      if (storageEmail) {
        writeUsEmail.value = storageEmail;
        writeUsMessage.focus();
      } else {
        writeUsEmail.focus();
      };
    } else {
      writeUsName.focus();
    };
  });
};

if (modalClose && modalWriteUs) {
  modalClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalWriteUs.classList.remove("modal-opened");
    modalWriteUs.classList.remove("modal-invalid");
  });
};

if (writeUsForm) {
  writeUsForm.addEventListener("submit", function(evt) {
    if (writeUsName.value && writeUsEmail.value && writeUsMessage.value) {
      if (isStorageSupport) {
        localStorage.setItem("name", writeUsName.value);
        localStorage.setItem("email", writeUsEmail.value);
      };
    } else {
      evt.preventDefault();
      modalWriteUs.classList.remove("modal-invalid");
      modalWriteUs.offsetWidth = modalWriteUs.offsetWidth;
      modalWriteUs.classList.add("modal-invalid");
    };
  });
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalWriteUs.classList.contains("modal-opened")) {
      modalWriteUs.classList.remove("modal-opened");
      modalWriteUs.classList.remove("modal-invalid");
    };
  };
});
