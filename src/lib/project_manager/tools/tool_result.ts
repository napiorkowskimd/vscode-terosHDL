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
const tool_build = require('./tool_build');

export class Tool_result {
    private results: any[] = [];
    private builds: any[] = [];

    constructor() {
    }

    add_result(name:string, pass_result:boolean) {
        let result_inst = {
            name: name,
            pass: pass_result
        };
        this.results.push(result_inst);
    }

    add_build(type:string, path:string) {
        let build_inst = new tool_build.Tool_build(type, path);
        this.builds.push(build_inst);
    }

    get_results() {
        return this.results;
    }

    get_builds() {
        return this.builds;
    }

}