//responsive navigation bar

document.addEventListener("DOMContentLoaded", () => {
  const togglebtn = document.querySelector(".toggle_btn");
  const togglebtnicon = document.querySelector(".toggle_btn i");
  const dropboxmenu = document.querySelector(".dropdown_menu");

  togglebtn.onclick = function () {
    dropboxmenu.classList.toggle("open");
    const isOpen = dropboxmenu.classList.contains("open");

    togglebtnicon.classList = isOpen
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
  };
});


// vuejs comments save option
var app = new Vue({
  el: '#app',
  data: {
    comments: []
  },
  created: function() {
    // Load comments from local storage on page load
    var storedComments = localStorage.getItem('comments');
    if (storedComments) {
      this.comments = JSON.parse(storedComments);
    }
  },
  components: {
    'comment-section': {
      template: `
        <div>
          <h2>Leave a Comment About My Page</h2>
          <div class="comment-input">
            <input v-model="comment" placeholder="Enter your comment...">
            <button class="submit-button" @click="addComment">Submit</button>
          </div>
          <ul>
            <li v-for="(comment, index) in comments" class="comment">
              {{ comment }}
            
            </li>
          </ul>
        </div>
      `,
      data: function() {
        return {
          comment: ''
        }
      },
      props: ['comments'],
      methods: {
        addComment: function() {
          this.comments.unshift(this.comment);
          this.comment = '';
          // Save comments to local storage
          localStorage.setItem('comments', JSON.stringify(this.comments));
        }
        // ,
        // deleteComment: function(index) {
        //   this.comments.splice(index, 1);
        //   // Delete comments from local storage
        //   localStorage.setItem('comments', JSON.stringify(this.comments));
        // }
      }
    }
  },
  
});

//<button class="delete-button" @click="deleteComment(index)">Delete</button>

// Collapsible about me
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}