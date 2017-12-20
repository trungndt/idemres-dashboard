(function() {
  $(function() {
    var AllEvents, AllGroupRes, CreateNewBlock, DataTableCustom, General, _DATA_ALL_EVENTS, _DATA_ALL_GROUP_RES;
    _DATA_ALL_EVENTS = [
      {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'KHAYA',
        'event_ref': '02131',
        'event_name': 'Fast Annual Dinner',
        'status': 'Planning',
        'percent': 60,
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '24/65',
        'is_active': false,
        'url': '#'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'JILEE',
        'event_ref': '034534',
        'event_name': 'Singapore Food Festival',
        'status': 'Planning',
        'percent': 40,
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '12/43',
        'is_active': false,
        'url': 'http://google.com'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'JOMA',
        'event_ref': '13130',
        'event_name': 'Sunway Conf',
        'status': 'Pending',
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '3/42',
        'is_active': false,
        'url': '#'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'DINSMITH',
        'event_ref': '42150',
        'event_name': 'Time Management Event',
        'status': 'Live',
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '3/21',
        'is_active': false,
        'url': 'http://google.com'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'KHAYA',
        'event_ref': '02131',
        'event_name': 'Fast Annual Dinner',
        'status': 'Planning',
        'percent': 60,
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '24/65',
        'is_active': false,
        'url': '#'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'JILEE',
        'event_ref': '034534',
        'event_name': 'Singapore Food Festival',
        'status': 'Planning',
        'percent': 40,
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '12/43',
        'is_active': false,
        'url': 'http://google.com'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'JOMA',
        'event_ref': '13130',
        'event_name': 'Sunway Conf',
        'status': 'Pending',
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '3/42',
        'is_active': false,
        'url': '#'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'DINSMITH',
        'event_ref': '42150',
        'event_name': 'Time Management Event',
        'status': 'Live',
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '3/21',
        'is_active': false,
        'url': 'http://google.com'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'KHAYA',
        'event_ref': '02131',
        'event_name': 'Fast Annual Dinner',
        'status': 'Planning',
        'percent': 60,
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '24/65',
        'is_active': false,
        'url': '#'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'JILEE',
        'event_ref': '034534',
        'event_name': 'Singapore Food Festival',
        'status': 'Planning',
        'percent': 40,
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '12/43',
        'is_active': false,
        'url': 'http://google.com'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'JOMA',
        'event_ref': '13130',
        'event_name': 'Sunway Conf',
        'status': 'Pending',
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '3/42',
        'is_active': false,
        'url': '#'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'DINSMITH',
        'event_ref': '42150',
        'event_name': 'Time Management Event',
        'status': 'Live',
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '3/21',
        'is_active': false,
        'url': 'http://google.com'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'KHAYA',
        'event_ref': '02131',
        'event_name': 'Fast Annual Dinner',
        'status': 'Planning',
        'percent': 60,
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '24/65',
        'is_active': false,
        'url': '#'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'JILEE',
        'event_ref': '034534',
        'event_name': 'Singapore Food Festival',
        'status': 'Planning',
        'percent': 40,
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '12/43',
        'is_active': false,
        'url': 'http://google.com'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'JOMA',
        'event_ref': '13130',
        'event_name': 'Sunway Conf',
        'status': 'Pending',
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '3/42',
        'is_active': false,
        'url': '#'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'DINSMITH',
        'event_ref': '42150',
        'event_name': 'Time Management Event',
        'status': 'Live',
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '3/21',
        'is_active': false,
        'url': 'http://google.com'
      }
    ];
    _DATA_ALL_GROUP_RES = [
      {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'KHAYA',
        'res_code': '02131',
        'event': 'Y',
        'status': 'Open',
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '24/65',
        'pen': 10,
        'edit': 5,
        'url': '#'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'JILEE',
        'res_code': '034534',
        'event': 'Y',
        'status': 'Cancelled',
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '12/43',
        'pen': 10,
        'edit': 5,
        'url': 'http://google.com'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'JOMA',
        'res_code': '13130',
        'event': 'N',
        'status': 'Open',
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '3/42',
        'pen': 10,
        'edit': 5,
        'url': '#'
      }, {
        'date_added': '30 Jul 2017, 12:18',
        'account_holder': 'DINSMITH',
        'res_code': '42150',
        'event': 'N',
        'status': 'Open',
        'contracted_start': '01 Jan 2018',
        'contracted_duration': '2 days',
        'company': 'Lorem Ipsum',
        'customer_name': 'Sylvia Stay',
        'customer_email': 'sylvia@gmail.com',
        'reg': '3/21',
        'pen': 10,
        'edit': 5,
        'url': 'http://google.com'
      }
    ];
    General = (function() {
      function General() {}

      General.init = function() {
        $('.nice-select').niceSelect();
        $('.image-dd').msDropDown();
        this.setupDatePicker();
        this.setupTimePicker();
        this.setupSidebarToggle();
        this.setupSwitcher();
      };

      General.activateCurrentPage = function() {};

      General.setupDatePicker = function() {
        $('.date-picker').datepicker({
          'dateFormat': 'dd M yy'
        });
      };

      General.setupTimePicker = function() {
        $('.time-picker').timepicker({
          'scrollDefault': 'now',
          'timeFormat': 'h:i A'
        });
      };

      General.setupSidebarToggle = function() {
        $(document).on('click', '#sidebar .sub-menu a', function() {
          $(this).parent().toggleClass('toggled');
          return $(this).next().slideToggle(100);
        });
      };

      General.setupSwitcher = function() {
        return $(document).on('click', '.switcher input[type="radio"]', function() {
          $(this).closest('.switcher').find('.active').removeClass('active');
          $(this).closest('.switcher-option').addClass('active');
        });
      };

      return General;

    })();
    DataTableCustom = (function() {
      function DataTableCustom() {}

      DataTableCustom.getDom = function() {
        return '<"top" <"row form-horizontal" <"col-sm-2 col-status"> <"col-sm-3"f> <"col-sm-7 text-right"l> > > rt <"bottom"p><"clear">';
      };

      DataTableCustom.getLanguageCustom = function(placeholder) {
        return {
          lengthMenu: 'Display _MENU_ per page',
          search: '',
          searchPlaceholder: placeholder,
          paginate: {
            previous: '<',
            next: '>'
          }
        };
      };

      DataTableCustom.setupStatusFilter = function(_this, filterCol) {
        var $me, $select, column;
        $me = $(_this);
        column = _this.api().column(filterCol);
        $me.parent().removeClass('form-inline');
        $me.parent().find('.input-sm').removeClass('input-sm');
        $select = $('<select/>', {
          'class': 'form-control drop-filter',
          'html': $('<option/>', {
            'value': '',
            'html': 'Filter by status'
          })
        });
        column.data().unique().sort().each(function(e, i) {
          return $select.append($('<option/>', {
            'value': e,
            'html': e
          }));
        });
        $select.on('change', function() {
          var val;
          val = $.fn.dataTable.util.escapeRegex($(this).val());
          return column.search(val != null ? val : '^' + val + {
            '$': ''
          }, true, false).draw();
        });
        return $me.prev().find('.col-status').prepend($select);
      };

      return DataTableCustom;

    })();
    CreateNewBlock = (function() {
      function CreateNewBlock() {}

      CreateNewBlock.init = function() {
        $(document).on('change', '#cbbEventType', function() {
          var $txtOther;
          $txtOther = $('#txtOtherEvent');
          if (this.value === 'Other') {
            $txtOther.show();
          } else {
            $txtOther.hide();
          }
        });
        $(document).on('change', '[data-action="disable-accordion"]', function(e) {
          var $panel;
          $panel = $(this).closest('.panel');
          if ($(this).prop('checked')) {
            $panel.addClass('disabled');
            $panel.find('.panel-collapse').collapse('hide');
          } else {
            $panel.removeClass('disabled');
          }
        });
        $(document).on('show.bs.collapse', '.disabled .panel-collapse', function(e) {
          preventDefault(e);
        });
        $(document).on('click', '[data-action="complete-step"]', function(e) {});
      };

      return CreateNewBlock;

    })();
    AllEvents = (function() {
      function AllEvents() {}

      AllEvents.init = function() {
        this.setupDataTables();
      };

      AllEvents.setupDataTables = function() {
        $('#tblAllEvents').DataTable({
          data: _DATA_ALL_EVENTS,
          dom: DataTableCustom.getDom(),
          language: DataTableCustom.getLanguageCustom('Search event reference/name...'),
          columns: [
            {
              data: 'date_added'
            }, {
              data: 'account_holder'
            }, {
              data: 'event_ref'
            }, {
              data: 'event_name'
            }, {
              data: 'contracted_start'
            }, {
              data: 'company'
            }, {
              data: 'customer_name'
            }, {
              data: 'reg'
            }, {
              data: 'url'
            }, {
              data: 'status'
            }
          ],
          columnDefs: [
            {
              targets: 2,
              render: function(data, type, row) {
                return '<a href="' + row.url + '">' + data + '</a>';
              }
            }, {
              targets: 3,
              render: function(data, type, row) {
                var cls, content, mapper;
                mapper = {
                  'planning': 'tag-warning',
                  'live': 'tag-success',
                  'pending': 'tag-default'
                };
                cls = 'tag ' + mapper[row.status.toLowerCase()];
                cls += ' status-' + row.status.toLowerCase();
                content = row.status + (row.status === 'Planning' ? ' ' + row.percent + '%' : '');
                return '<a href="' + row.url + '">' + data + '</a><br/><div class="' + cls + '">' + content + '</div>';
              }
            }, {
              targets: 4,
              render: function(data, type, row) {
                return data + '<br/><small>' + row.contracted_duration + '</small>';
              }
            }, {
              targets: 6,
              render: function(data, type, row) {
                return data + '<br/><small class="customer-email">' + row.customer_email + '</small>';
              }
            }, {
              targets: 8,
              render: function(data, type, row) {
                var cls, targetAttr;
                cls = 'icon icon-globe' + (data === '#' ? '-disabled' : '');
                targetAttr = data !== '#' ? 'target="_blank"' : '';
                return '<a href="' + data + '" class="' + cls + '" ' + targetAttr + '></a>';
              }
            }, {
              targets: 9,
              visible: false,
              searchable: true
            }
          ],
          initComplete: function(a, b, c) {
            DataTableCustom.setupStatusFilter(this, 9);
            return false;
          }
        });
      };

      return AllEvents;

    })();
    AllGroupRes = (function() {
      function AllGroupRes() {}

      AllGroupRes.init = function() {
        this.setupDataTables();
      };

      AllGroupRes.setupDataTables = function() {
        $('#tblAllGroupRes').DataTable({
          data: _DATA_ALL_GROUP_RES,
          dom: DataTableCustom.getDom(),
          language: DataTableCustom.getLanguageCustom('Search reservation code...'),
          columns: [
            {
              data: 'date_added'
            }, {
              data: 'account_holder'
            }, {
              data: 'res_code'
            }, {
              data: 'event'
            }, {
              data: 'contracted_start'
            }, {
              data: 'company'
            }, {
              data: 'customer_name'
            }, {
              data: 'reg'
            }, {
              data: 'pen'
            }, {
              data: 'edit'
            }, {
              data: 'url'
            }, {
              data: 'status'
            }
          ],
          columnDefs: [
            {
              targets: 2,
              render: function(data, type, row) {
                var cls, content, mapper;
                mapper = {
                  'open': 'tag-success',
                  'cancelled': 'tag-default'
                };
                cls = 'tag ' + mapper[row.status.toLowerCase()];
                cls += ' status-' + row.status.toLowerCase();
                content = row.status;
                return '<a href="' + row.url + '">' + data + '</a><br/><div class="' + cls + '">' + content + '</div>';
              }
            }, {
              targets: 4,
              render: function(data, type, row) {
                return data + '<br/><small>' + row.contracted_duration + '</small>';
              }
            }, {
              targets: 6,
              render: function(data, type, row) {
                return data + '<br/><small class="customer-email">' + row.customer_email + '</small>';
              }
            }, {
              targets: 10,
              render: function(data, type, row) {
                var cls, targetAttr;
                cls = 'icon icon-globe' + (data === '#' ? '-disabled' : '');
                targetAttr = data !== '#' ? 'target="_blank"' : '';
                return '<a href="' + data + '" class="' + cls + '" ' + targetAttr + '></a>';
              }
            }, {
              targets: 11,
              visible: false,
              searchable: true
            }
          ],
          initComplete: function(a, b, c) {
            DataTableCustom.setupStatusFilter(this, 11);
            return false;
          }
        });
      };

      return AllGroupRes;

    })();
    General.init();
    CreateNewBlock.init();
    AllEvents.init();
    AllGroupRes.init();
  });

}).call(this);
