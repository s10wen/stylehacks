'use strict';

export default function plugin (targets, nodeTypes, detect) {
    class Plugin {
        constructor (css, result) {
            this.nodes = [];
            this.css = css;
            this.result = result;
            this.targets = targets;
            this.nodeTypes = nodeTypes;
        }

        push (node, message) {
            node._stylehacks = message;
            this.nodes.push(node);
        }

        any (node) {
            let hasHack = false;
            if (~this.nodeTypes.indexOf(node.type)) {
                detect.apply(this, arguments);
                if (node._stylehacks) {
                    hasHack = true;
                }
            }
            return hasHack;
        }

        detect () {
            this.css.walk(function (node) {
                if (~this.nodeTypes.indexOf(node.type)) {
                    detect.apply(this, arguments);
                }
            }.bind(this));
        }

        detectAndResolve () {
            this.detect();
            return this.resolve();
        }

        detectAndWarn () {
            this.detect();
            return this.warn();
        }

        resolve () {
            return this.nodes.forEach(node => node.remove());
        }

        warn () {
            return this.nodes.forEach(node => {
                return this.result.warn(node._stylehacks, {node: node});
            });
        }
    }

    return Plugin;
}
