//below mixin is used to generate pagination details according to the length of the tokenDumms array.
var myMixin = {
  methods: {
    GetPager: function (totalItems, currentPage, pageSize) {
      currentPage = currentPage || 1;

      pageSize = pageSize || 3;

      var totalPages = Math.ceil(totalItems / pageSize);

      var startPage, endPage;
      if (totalPages <= 10) {
        startPage = 1;
        endPage = totalPages;
      } else {
        if (currentPage <= 6) {
          startPage = 1;
          endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
          startPage = totalPages - 9;
          endPage = totalPages;
        } else {
          startPage = currentPage - 5;
          endPage = currentPage + 4;
        }
      }

      var startIndex = (currentPage - 1) * pageSize;
      var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

      var pages = _.range(startPage, endPage + 1);

      return {
        totalItems: totalItems, //total elements in the array.
        currentPage: currentPage, //get the current page
        pageSize: pageSize, //elements in the current page
        totalPages: totalPages, //total pages generated
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages,
      };
    },
  },
};

mango = new Vue({
  el: "#mango",

  mixins: [myMixin],

  data: {
    tokenDumms: [],
    pager: {},
    tokens: {},
    searchQuery: null,
    searchFilters: null,
  },

  methods: {
    //method to set the page content
    setPage: function (page, itemsToFilter) {
      if (page < 1 || page > this.pager.totalPages) {
        return;
      }

      if (itemsToFilter != null) {
        this.pager = this.GetPager(itemsToFilter.length, page, 3);

        this.tokens = itemsToFilter.slice(
          this.pager.startIndex,
          this.pager.endIndex + 1
        );

        setTimeout(function () {
          mango.tokenHoverClasses(); //card hover effect
        }, 1000);
      } else if (itemsToFilter == null || itemsToFilter.length <= 0) {
        this.pager = this.GetPager(this.tokenDumms.length, page, 3);

        this.tokens = this.tokenDumms.slice(
          this.pager.startIndex,
          this.pager.endIndex + 1
        );
      }

      setTimeout(function () {
        mango.tokenHoverClasses(); //card hover effect
      }, 1000);
    },

    //index method
    initController: function () {
      this.setPage(1, this.tokenDumms);
    },

    //method for input search
    resultQuery: function () {
      if (this.searchQuery) {
        this.searchFilters = this.tokenDumms.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => {
              if (item.topic.toLowerCase().includes(v)) {
                return item.topic.toLowerCase().includes(v);
              } else if (item.channel.toLowerCase().includes(v)) {
                return item.channel.toLowerCase().includes(v);
              } else if (item.created_time.toLowerCase().includes(v)) {
                return item.created_time.toLowerCase().includes(v);
              }
            });
        });

        if (this.pager.totalPages < 1) {
          this.pager.totalPages = 1;
        }

        this.setPage(1, this.searchFilters);
      } else {
        if (this.pager.totalPages < 1) {
          this.pager.totalPages = 1;
        }
        this.searchFilters = this.tokenDumms;
        this.setPage(1, this.searchFilters);
      }
    },

    //method for card hover effect
    tokenHoverClasses: function () {
      $(".token-body")
        .mouseenter(function (e) {
          $(".ripple").remove();

          var posX = $(this).offset().left,
            posY = $(this).offset().top,
            cw = $(this).width(),
            ch = $(this).height();

          $(this).prepend(
            "<span style='position: absolute;' class='ripple'></span>"
          );

          if (cw >= ch) {
            ch = cw;
          } else {
            cw = ch;
          }

          var x = e.pageX - posX - cw / 2;
          var y = e.pageY - posY - ch / 2;

          $(".ripple")
            .css({
              width: cw,
              height: ch,
              top: y + "px",
              left: x + "px",
            })
            .addClass("rippleEffect");
        })
        .mouseleave(function () {
          $(".ripple").remove();
        });
    },

    whatClassIsIt: function (diff) {
      if (diff <= 30) return "text-success";
      else if (diff > 30 && diff <= 75) return "text-warning";
      else if (diff > 75) return "text-danger";
    },
  },

  mounted: function () {
    var objArr = new Array();

    for (let i = 0; i < 22; i++) {
      let obj = {
        channel: `Codepen ${i + 1}`,
        topic: `Spam ${i + 1}`,
        created_time: "27 July 2020",
        token: `${i + 1}dW_Cvs${i + 1}ZCJy`,
        count: i,
        difference: 31,
      };

      console.log(obj);
      objArr.push(obj);
    }

    this.tokenDumms = [...objArr]; //data array;

    this.initController(); //index method used to call the setPage method

    mango.tokenHoverClasses(); //method for card hover effect
  },
});
