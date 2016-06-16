ungdungAngularjs.controller("sinhvienController", function($scope, $http) {
    $scope.sinhvien = {
        ho: "Nguyen Quoc",
        ten: "Trinh",
        hocphi: 200,
        tenMonHoc: [{
            ten: 'Vat Ly Dai Cuong',
            diemthi: 8.5
        }, {
            ten: 'Triet Hoc',
            diemthi: 7.5
        }, {
            ten: 'Toan',
            diemthi: 9.0
        }, {
            ten: 'Tieng Anh',
            diemthi: 8.0
        }, {
            ten: 'Kinh Te',
            diemthi: 9.5
        }],
        hoten: function() {
            var doituongsinhvien;
            doituongsinhvien = $scope.sinhvien;
            return doituongsinhvien.ho + " " + doituongsinhvien.ten;
        }
    };
    $scope.reset = function() {
        $scope.Ho = "Tran Minh";
        $scope.Ten = "Chinh";
        $scope.email = "TranMinhChinh@gmail.com";
    }

    var url = "app/resources/dulieuSV.txt";
    $http.get(url).success(function(response) {
        $scope.sinhvienk60 = response;
    });

});