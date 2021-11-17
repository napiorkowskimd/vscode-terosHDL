// Copyright 2020-2021 Teros Technology
//
// Ismael Perez Rojo
// Carlos Alberto Ruiz Naranjo
//
// This file is part of TerosHDL.
//
// TerosHDL is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// TerosHDL is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with TerosHDL.  If not, see <https://www.gnu.org/licenses/>.

const fs = require('fs');
const utils = require('../utils');

enum STATE_TYPE {
    empty,
    loading,
    done,
}

export class Tool_test_list {

    private state = STATE_TYPE.empty;
    private test_list: any[] = [];

    set_loading() {
        this.clear();
        this.state = STATE_TYPE.loading;
    }

    set_empty() {
        this.state = STATE_TYPE.empty;
    }

    set_done() {
        this.state = STATE_TYPE.done;
    }

    clear() {
        this.set_empty();
        this.test_list = [];
    }

    add_test(name, location) {
        let test_inst = { name: name, location: location };
        this.test_list.push(test_inst);
    }


}