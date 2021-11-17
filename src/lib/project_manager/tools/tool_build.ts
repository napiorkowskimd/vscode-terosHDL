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

export enum BUILD_TYPE {
    text,
    directory,
    html,
}

export class Tool_build {
    private type;
    private path: string = "";

    constructor(type: string, path: string) {
        this.type = type;
        this.path = path;
    }

    check_if_path_exist (){
        return fs.existsSync(this.path);
    }

    open() {
        if (this.type === BUILD_TYPE.text) {
            this.open_text();
        }
        else if (this.type === BUILD_TYPE.directory) {
            this.open_directory();
        }
        else if (this.type === BUILD_TYPE.html) {
            this.open_html();
        }

    }

    open_text() {
        utils.open_file(this.path);
    }
    open_directory() {
        utils.open_file(this.path);
    }

    open_html() {
        
    }

}